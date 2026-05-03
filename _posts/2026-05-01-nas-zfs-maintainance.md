---
title: ZFS maintainance 🖴
tags: nas zfs storage
toc: true
---
> Incident - [Netdata](http://192.168.0.125:19999/)

<div class="encart blue" markdown="1">
[**Pool - RAID5 / Z1**](http://127.0.0.1:4000/zfs-ubuntu/#1---pool---raid5--z1) - 3disks x 4To - 
</div>

<div class="encart green" markdown="1">
[$ zpool list](https://chatgpt.com/share/69f4ee60-5528-83eb-b959-c54cb78f8f3c)
- SIZE: 10.9 TB → total usable capacity
- ALLOC: 6.91 TB → space currently used
- FREE: 3.96 TB → remaining space
- CAP (capacity): 63% → how full the pool is
- FRAG: 1% → extremely low fragmentation (this is excellent)
- DEDUP: 1.00× → deduplication is effectively not saving space (likely off or no duplicate data)
- HEALTH: ONLINE → everything is working normally

</div>

# [2026-05-01 ⮺](https://chatgpt.com/share/69f4e6b8-3c28-83eb-9b5b-ec5a67f051a2)

After scrub

<div class="encart blue" markdown="1">
**state**: ONLINE → pool is working fine  
**errors**: No known data errors → no corruption reached your files 👍  
**CKSUM 562 on sdc** → 562 checksum mismatches detected on that disk  
**scrub repaired 25.7M** → ZFS found bad data and successfully fixed it using parity (RAIDZ1)  
</div>

{% highlight bash %}
$ zpool status
  pool: storage_pool
 state: ONLINE
status: One or more devices has experienced an unrecoverable error.  An
	attempt was made to correct the error.  Applications are unaffected.
action: Determine if the device needs to be replaced, and clear the errors
	using 'zpool clear' or replace the device with 'zpool replace'.
   see: https://openzfs.github.io/openzfs-docs/msg/ZFS-8000-9P
  scan: scrub repaired 25.7M in 06:32:41 with 0 errors on Fri May  1 17:26:48 2026
config:

	NAME          STATE     READ WRITE CKSUM
	storage_pool  ONLINE       0     0     0
	 raidz1-0    ONLINE       0     0     0
	   sda       ONLINE       0     0     0
	   sdb       ONLINE       0     0     0
	   sdc       ONLINE       0     0   562

errors: No known data errors
{% endhighlight %}

After [`smartctl -a /dev/sdc`](https://chatgpt.com/share/69f70002-3764-83eb-80f2-b492ac36d2c8) => no error detected

# [2026-05-01 ⮺](https://chatgpt.com/share/69f485ab-6278-83eb-bc6d-54def0df3554)

<div class="encart orange" markdown="1">
data is still safe for now.
If any other disk fails, you lose the pool
“No known data errors” = nothing has been lost or corrupted yet.

🧠 Bottom line first
Your disk is not clearly failing physically, but it is unstable from ZFS’s point of view. That usually points to:
intermittent I/O errors (controller, cable, power, or SMR write issues), not hard media failure yet

## What looks OK
These are all reassuring:

- Reallocated_Sector_Ct = 0 → no bad sectors remapped
- Current_Pending_Sector = 0 → no unreadable sectors
- Offline_Uncorrectable = 0
- UDMA_CRC_Error_Count = 0 → no SATA link corruption detected
- SMART overall-health: PASSED

👉 This strongly suggests no permanent platter damage yet

## SMR Disk
Your disk model is a big clue

Seagate BarraCuda ST4000DM004 (SMR)

This is important.

This drive is:

- SMR (Shingled Magnetic Recording)
- Known to behave badly in RAID/ZFS under sustained writes
- Can “stall” for long periods → ZFS interprets as disk errors

👉 This model is not recommended for RAIDZ pools for exactly this reason.


## Mismatch

| Layer          | Status                     |
| -------------- | -------------------------- |
| Kernel (dmesg) | Clean                      |
| SMART          | Clean                      |
| ZFS            | Degraded (too many errors) |

## Outcome

Clear error and see.
{% highlight language %}
$ zpool clear storage_pool
$ zpool status -v 1

# and after a while with no error
$ zpool scrub storage_pool
{% endhighlight %}
</div>

## Logs

### zpool
{% highlight bash %}
$ zpool status
  pool: storage_pool
 state: DEGRADED
status: One or more devices has experienced an unrecoverable error.  An
	attempt was made to correct the error.  Applications are unaffected.
action: Determine if the device needs to be replaced, and clear the errors
	using 'zpool clear' or replace the device with 'zpool replace'.
   see: https://openzfs.github.io/openzfs-docs/msg/ZFS-8000-9P
  scan: scrub repaired 0B in 06:07:06 with 0 errors on Sun Aug 10 06:31:08 2025
config:

	NAME          STATE     READ WRITE CKSUM
	storage_pool  DEGRADED     0     0     0
	 raidz1-0    DEGRADED     0     0     0
	   sda       ONLINE       0     0     0
	   sdb       ONLINE       0     0     0
	   sdc       DEGRADED     0     0     0  too many errors

errors: No known data errors
{% endhighlight %}

### Smart

<details markdown="1"><summary>$ smartctl -a /dev/sdc</summary>
{% highlight bash %}
$ sudo smartctl -a /dev/sdc
[sudo] password for yves: 
smartctl 7.4 2023-08-01 r5530 [x86_64-linux-6.8.0-107-generic] (local build)
Copyright (C) 2002-23, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Family:     Seagate BarraCuda 3.5 (SMR)
Device Model:     ST4000DM004-2CV104
Serial Number:    WFN0WX3L
LU WWN Device Id: 5 000c50 0be8070e0
Firmware Version: 0001
User Capacity:    4,000,787,030,016 bytes [4.00 TB]
Sector Sizes:     512 bytes logical, 4096 bytes physical
Rotation Rate:    5425 rpm
Form Factor:      3.5 inches
Device is:        In smartctl database 7.3/5528
ATA Version is:   ACS-3 T13/2161-D revision 5
SATA Version is:  SATA 3.1, 6.0 Gb/s (current: 6.0 Gb/s)
Local Time is:    Fri May  1 10:39:11 2026 UTC
SMART support is: Available - device has SMART capability.
SMART support is: Enabled

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

General SMART Values:
Offline data collection status:  (0x00)	Offline data collection activity
					was never started.
					Auto Offline Data Collection: Disabled.
Self-test execution status:      (   0)	The previous self-test routine completed
					without error or no self-test has ever 
					been run.
Total time to complete Offline 
data collection: 		(    0) seconds.
Offline data collection
capabilities: 			(0x73) SMART execute Offline immediate.
					Auto Offline data collection on/off support.
					Suspend Offline collection upon new
					command.
					No Offline surface scan supported.
					Self-test supported.
					Conveyance Self-test supported.
					Selective Self-test supported.
SMART capabilities:            (0x0003)	Saves SMART data before entering
					power-saving mode.
					Supports SMART auto save timer.
Error logging capability:        (0x01)	Error logging supported.
					General Purpose Logging supported.
Short self-test routine 
recommended polling time: 	(   1) minutes.
Extended self-test routine
recommended polling time: 	( 495) minutes.
Conveyance self-test routine
recommended polling time: 	(   2) minutes.
SCT capabilities: 	      (0x30a5)	SCT Status supported.
					SCT Data Table supported.

SMART Attributes Data Structure revision number: 10
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  1 Raw_Read_Error_Rate     0x000f   083   064   006    Pre-fail  Always       -       197586811
  3 Spin_Up_Time            0x0003   096   096   000    Pre-fail  Always       -       0
  4 Start_Stop_Count        0x0032   100   100   020    Old_age   Always       -       997
  5 Reallocated_Sector_Ct   0x0033   100   100   010    Pre-fail  Always       -       0
  7 Seek_Error_Rate         0x000f   081   060   045    Pre-fail  Always       -       140128547
  9 Power_On_Hours          0x0032   091   091   000    Old_age   Always       -       8696h+35m+30.105s
 10 Spin_Retry_Count        0x0013   100   100   097    Pre-fail  Always       -       0
 12 Power_Cycle_Count       0x0032   100   100   020    Old_age   Always       -       996
183 Runtime_Bad_Block       0x0032   100   100   000    Old_age   Always       -       0
184 End-to-End_Error        0x0032   100   100   099    Old_age   Always       -       0
187 Reported_Uncorrect      0x0032   100   100   000    Old_age   Always       -       0
188 Command_Timeout         0x0032   100   100   000    Old_age   Always       -       0 0 0
189 High_Fly_Writes         0x003a   100   100   000    Old_age   Always       -       0
190 Airflow_Temperature_Cel 0x0022   066   054   040    Old_age   Always       -       34 (Min/Max 27/34)
191 G-Sense_Error_Rate      0x0032   100   100   000    Old_age   Always       -       0
192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       76
193 Load_Cycle_Count        0x0032   099   099   000    Old_age   Always       -       2645
194 Temperature_Celsius     0x0022   034   046   000    Old_age   Always       -       34 (0 19 0 0 0)
195 Hardware_ECC_Recovered  0x001a   083   064   000    Old_age   Always       -       197586811
197 Current_Pending_Sector  0x0012   100   100   000    Old_age   Always       -       0
198 Offline_Uncorrectable   0x0010   100   100   000    Old_age   Offline      -       0
199 UDMA_CRC_Error_Count    0x003e   200   200   000    Old_age   Always       -       0
240 Head_Flying_Hours       0x0000   100   253   000    Old_age   Offline      -       5635h+23m+09.083s
241 Total_LBAs_Written      0x0000   100   253   000    Old_age   Offline      -       7691679915
242 Total_LBAs_Read         0x0000   100   253   000    Old_age   Offline      -       35023041231

SMART Error Log Version: 1
No Errors Logged

SMART Self-test log structure revision number 1
No self-tests have been logged.  [To run self-tests, use: smartctl -t]

SMART Selective self-test log data structure revision number 1
 SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS
    1        0        0  Not_testing
    2        0        0  Not_testing
    3        0        0  Not_testing
    4        0        0  Not_testing
    5        0        0  Not_testing
Selective self-test flags (0x0):
  After scanning selected spans, do NOT read-scan remainder of disk.
If Selective self-test is pending on power-up, resume after 0 minute delay.

The above only provides legacy SMART information - try 'smartctl -x' for more
{% endhighlight %}
</details>


### dmesg

{% highlight language %}
$ sudo dmesg -T | grep -i sdc
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] 7814037168 512-byte logical blocks: (4.00 TB/3.64 TiB)
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] 4096-byte physical blocks
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] Write Protect is off
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] Mode Sense: 00 3a 00 00
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] Preferred minimum I/O size 4096 bytes
[Fri May  1 08:58:43 2026]  sdc: sdc1 sdc9
[Fri May  1 08:58:43 2026] sd 2:0:0:0: [sdc] Attached SCSI disk
[Fri May  1 08:59:09 2026] NFSD: Using nfsdcld client tracking operations.
{% endhighlight %}