---
title: BIQU-H2
published: true
tags: 3dprinter
---
> [BIQU H2 Extruder V2.0 ](https://3dprintbeginner.com/ender-6-direct-drive-conversion-h2-extruder/) / [3djake](https://www.3djake.com/biqu/h2-extruder-v20) / [review](https://3dwork.io/en/biqu-h2-extruder-review/)

![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F411UyzCrlbL._SL160_.jpg&f=1&nofb=1)

### [**Wiring**](https://www.reddit.com/r/BIGTREETECH/comments/mihwg1/ender_3_v2_biqu_h2_stepper_wiring/) / [convention](https://caggius.wordpress.com/stepper-motor-wiring-conventions/)
- [(Another) Biqu H2 direct drive extruder upgrade](https://www.reddit.com/r/ender6/comments/shn39o/another_biqu_h2_direct_drive_extruder_upgrade/)
- [BIQU H2 V2 swap](https://www.reddit.com/r/ender6/comments/rxcarq/finally_biqu_h2_v2_swap_ender_6/) - _everything else is stock_ - The H2 V2 has a full rectangular hot end, which means a bunch of thingiverse mounts were outdated
	- [mount plate](https://www.thingiverse.com/thing:4893522)
	- [Fan Duct](https://www.thingiverse.com/thing:5202213)
	- [configuring steps from the new extruder ](https://www.reddit.com/r/ender6/comments/rxcarq/finally_biqu_h2_v2_swap_ender_6/hu6fd46/) - don't change firmware for [that](https://www.reddit.com/r/ender6/comments/rvtlx8/comment/hrcky6w/?utm_source=reddit&utm_medium=web2x&context=3). You use printer face or [your octoprint]({% post_url 2017-09-24-Octoprint %}) to edit the [EEPROM CONFIG code](https://plugins.octoprint.org/plugins/eeprom_marlin/). => **you need to connect to usb port** and follow [instruction](https://www.reddit.com/r/ender6/comments/rvtlx8/comment/hrcky6w/?utm_source=reddit&utm_medium=web2x&context=3)
	- [Did the biqu h2 upgrade](https://www.reddit.com/r/ender6/comments/rvtlx8/did_the_biqu_h2_upgrade_everything_working_well/) - / [cable chain](https://www.thingiverse.com/thing:4731935)
	- Stepper config: 
    	- Number of pulses: 932steps/mm for stepper motor drive at 16 subdivisions  (micro-steps) (further correction is required)
        - Recommended motor current: 800mA
        - Extrusion capacity (based on existing): 600mm³/min(depending on filaments)
        
### [**Klipper BIQU H2 v2 Config**](https://3dprintbeginner.com/ender-6-direct-drive-conversion-h2-extruder/) / [config](https://3dprintbeginner.com/wp-content/uploads/2021/05/Ender6_BIQU-H2.zip)

{% highlight ini %}
[extruder]
max_extrude_only_distance: 1000.0
step_pin: PB4
dir_pin: !PB3
enable_pin: !PC3
microsteps: 16
rotation_distance: 3.4334
nozzle_diameter: 0.400
filament_diameter: 1.750
heater_pin: PA1
sensor_type: EPCOS 100K B57560G104F
sensor_pin: PC5
control: pid
pid_Kp: 16.948
pid_Ki: 0.706
pid_Kd: 101.690
min_temp: 0
max_temp: 260
pressure_advance: 0.05
{% endhighlight %}

Firmware retraction for [BIQU H2](https://www.reddit.com/r/BIGTREETECH/comments/swvcz0/comment/hxpj5ze/?utm_source=share&utm_medium=web2x&context=3)
{% highlight ini %}
[firmware_retraction]
retract_length: 0.5
retract_speed: 4
{% endhighlight %}

**To check BEFORE USE**
{% highlight ini %}
[tmc2209 extruder]
#uart_pin: PC11 # not creality board
#tx_pin: PC10
#uart_address: 3
run_current: 0.750
hold_current: 0.500
{% endhighlight %}

