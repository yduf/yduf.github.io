---
title: PLA tested
published: true
tags: 3dprint pla
---
> PLA tested so far -- 1.75mm

### [eSun lite Dryer](https://www.esun3d.com/uploads/eBOX-Lite-Manual.pdf)
- [Filament Dryer / Dehydrator](https://www.thingiverse.com/thing:1618037)
	- [Comment sécher votre filament (PLA, ABS, nylon)](https://all3dp.com/fr/2/secher-filament-pla-abs-nylon/)

**Time** - Unit is in Hour
**Temperature** 
- **1** - PLA/PLA+ - 40°
- **2** - ABS/ABS+ / PETG - 50°
- **3** - PVA / Nylon / PC - 55°


    
- [Faites votre propre Dual PLA](https://www.youtube.com/watch?v=Bjo_4RYRaOo)

<!-- see base fiddler for this page: https://jsfiddle.net/y_duf/oqh3p8tx/ -->

{::nomarkdown}
    <style>
        .palette {
            display: flex;
        }

        .color-box-container {
            position: relative;
            margin: 10px;
        }

        .color-box {
            width: 50px;
            height: 50px;
            cursor: pointer;
            transition: transform 0.2s;
            border-radius: 10px;
            stroke: black; /* Stroke color */
            stroke-width: 4; /* Stroke width */
            rx: 10; /* Default rx value for rounded corners */
            ry: 10; /* Default ry value for rounded corners */
        }

        .color-box:hover {
            transform: scale(1.1);
        }

        .product-list {
            display: none;
            position: absolute;
            background-color: white;
            padding: 10px;
            border: 1px solid #ccc;
            z-index: 1;
            border-radius: 5px;
            top: 30px; /* Adjust the top position to match your layout */
            left: 0;
            max-width: 500px; /* Set the maximum width */
            min-width: 100px; /* Set the minimum width */
            white-space: nowrap; /* Prevent text from wrapping */
            overflow: auto; /* Enable scrollbars for overflow text */
        }
  
        /* Define different styles for list items */
        .product-list ul {
            list-style-type: none; /* Remove default list marker */
            padding: 0;
        }

        .color-box-container:hover .product-list {
            display: block;
        }
  
         /* Light grey */
        .light-grey {
            fill: #f2f2f2;
        }

        /* Grey */
        .grey {
            fill: #ccc;
        }

        /* Dark grey */
        .dark-grey {
            fill: #bbb; /* Text color for dark grey */
        }
  
          /* Orange */
        .orange {
            fill: orange; /* Set fill color to orange */
        }
  
        /* Colored circle */
        .circle {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 5px;
        }
    </style>
{:/}

### Tech Palette
like [USSA design](https://www.youtube.com/@ussadesign/videos)

{::nomarkdown}
<div class="palette">
  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" fill="white" />
    </svg>
    <div class="product-list">White
      <ul>
        <li><a href="https://www.amazon.fr/SUNLU-Filament-Dimensional-Accuracy-Printing/dp/B07R8X76GW">SUNLU PLA+</a> easy to print - very thin 
          - 210° / 60° / 65° </li>
        <li><a href="https://www.amazon.fr/gp/product/B017HAIMZU">ICE</a> easy to print - thick 
          - 205° </li>
        <li><a href="https://www.amazon.fr/Verbatim-Printer-Filament-PLA-blanc/dp/B00WRBI59S">Verbatim</a> - very thin/precise print - 205° </li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" class="orange"  />
    </svg>
    <div class="product-list">Orange
      <ul>
        <li><a href="https://www.amazon.fr/gp/product/B017HAIB1A/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">Obstinate Orange (ICE)</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" fill="red"  />
    </svg>
    <div class="product-list">Red
      <ul>
        <li><a href="https://www.amazon.fr/gp/product/B074PDDPJ7/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1">rouge pompier (dagoma chromatic)</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" class="light-grey"  />
    </svg>
    <div class="product-list">Light Grey 
      <ul>
        <li><span class="circle" style="background-color: #D2D7D3;"></span><a href="https://www.3djake.fr/formfutura/easyfil-epla-light-grey">Light Grey (EasyFil)</a></li>
        <li><span class="circle" style="background-color: #D2D2C8;"></span><a href="https://yduf.github.io/mac-classic/">Mac Classic</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" class="grey"  />
    </svg>
    <div class="product-list">Grey
      <ul>
        <li><a href="#">none</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" fill="#555756"  />
    </svg>
    <div class="product-list">Dark Grey
      <ul>
        <li><span class="circle" style="background-color: #797B7A;"></span><a href="https://www.3djake.fr/formfutura/easyfil-epla-grey-aluminium">Grey Aluminium</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">
      <rect width="100%" height="100%" fill="black"  />
    </svg>
    <div class="product-list">Black
      <ul>
        <li><a href="https://www.amazon.fr/gp/product/B074PD8GYY/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1">noir brillant (dagoma chromatic)</a></li>
        <li><a href="https://www.3djake.fr/polymaker/polyterra-pla-charcoal-black">Charcoal Black (PolyTerra)</a></li>
      </ul>
    </div>
  </div>

</div>   
{:/}

### Alt Palette

{::nomarkdown}
<div class="palette">

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">Pink
      <rect width="100%" height="100%" fill="#FE69B2"  />
    </svg>
    <div class="product-list">
      <ul>
        <li><a href="https://www.amazon.fr/dp/B017HAIE1M/ref=twister_B09HSJWH47?th=1"> Precious Pink   (ICE)</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">Green
      <rect width="100%" height="100%" fill="#99D461"  />
    </svg>
    <div class="product-list">
      <ul>
        <li><a href="https://www.amazon.fr/gp/product/B017HAI53E/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&th=1">Mellow Mint  (ICE)</a></li>
      </ul>
    </div>
  </div>

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">Blue
      <rect width="100%" height="100%" fill="#538DD9"  />
    </svg>
    <div class="product-list">
      <ul>
        <li><a href="https://www.3djake.fr/formfutura/easyfil-epla-light-blue">Light Blue (EasyFil)</a></li>
      </ul>
    </div>
  </div>


</div>   
{:/}

### Misc Palette

{::nomarkdown}
<div class="palette">

  <!-- Repeat the color boxes and product lists for other colors -->
  <div class="color-box-container">
    <svg class="color-box">Gold
      <rect width="100%" height="100%" fill="#E4C392"  />
    </svg>
    <div class="product-list">
      <ul>
        <li><a href="https://www.amazon.fr/gp/product/B017HAI4VM/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1">Groovy Gold (ICE)</a>  - easy to print, nice <a href="https://www.reddit.com/r/3Dprinting/comments/anh3qg/guan_bas_relief_printed_vertically_012_layer/">bronze/brass finish</a> - 205°C/55°C - clean glass - work perfectly</li>
      </ul>
    </div>
  </div>

</div>   
{:/}

## [Provider/Vendor](https://forum.prusaprinters.org/forum/original-prusa-i3-mk3-discussion-generale-annonces-et-nouveautes/filaments-avis-et-conseils/)
- [3djake.fr](https://www.3djake.fr) - TBD
	- [PLA Economy Light Gray](https://www.3djake.fr/colorfabb/pla-economy-light-gray) - TBD
    - [PolyTerra PLA Arctic Teal ](https://www.3djake.fr/polymaker/polyterra-pla-arctic-teal) - imprime bien mais [TVOC](https://learn.kaiterra.com/en/air-academy/understanding-tvoc-volatile-organic-compounds) important 1.2 mg/m³  a l'ouverture (yellow air state) - to recheck
		- excellent printing 210°C 80 mm/s / Bed at 40°C
        - very bad stickyness => + lack + height tuning
    - [PolyTerra PLA Charcoal Black  ](https://www.3djake.fr/polymaker/polyterra-pla-charcoal-black) - TBD
    - [PolyTerra PLA Fossil Grey  ](https://www.3djake.fr/polymaker/polyterra-pla-fossil-grey?sai=10324   ) - good printing 205°C/40°C (warp on higher bed temp) - clean glass (alcohol whipe) - 120 mm/s
		- issue with default ender 3 extruder (underextrusion issue)
    
    - [PLA Extrafill Vertigo Galaxy](https://www.3djake.fr/fillamentum/pla-extrafill-vertigo-galaxy) - TBD
- [3DFil](https://www.3dfil.fr/commande) - TBD

## PLA 
### [ICE](https://distrinova.net/brand/ice-filaments/)
- [white (0.75kg)](https://www.amazon.fr/gp/product/B017HAIMZU/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&psc=1) - easy to print - thick 
	- 205°
- [Groovy Gold (0.75kg)](https://www.amazon.fr/gp/product/B017HAI4VM/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1) - easy to print, nice [bronze/brass finish](https://www.reddit.com/r/3Dprinting/comments/anh3qg/guan_bas_relief_printed_vertically_012_layer/)
	- 205°C/55°C - clean glass - work perfectly
- [Obstinate Orange (0.75kg)](https://www.amazon.fr/gp/product/B017HAIB1A/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1) - nice color  
	- 200..215° / bed 60° => WAIT FOR BED TEMP + lack ortherwise does not stick well to glass

### [Sunlu](https://www.serial-testeur.com/en/sunlu-pla-filament-test-of-the-complete-collection-or-almost/) / [thingiverse](https://www.thingiverse.com/thing:5210727/comments)
- [PLA+ White ](https://www.amazon.fr/gp/product/B07XFL3XB9/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1) - [210° / 60°](https://www.thingiverse.com/groups/creality-cr-10/forums/general/topic:41698)

### [Heliox used](https://www.youtube.com/c/HelioxLab/videos)
- [Noulei Filament](https://www.amazon.fr/Noulei-Filament-imprimante-Printing-Bobine/dp/B07PZRSYC6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=rouge%2Bsoie%2Bpla&qid=1637248764&sr=8-5&linkCode=sl1&tag=w3bhx-21&linkId=9acbd4af19ec944a0ac4a1476b4868d7&language=fr_FR&ref_=as_li_ss_tl&th=1)
- [cuivre](https://francofil.fr/product/filament-pla-cuivre-2/)
- [Eryone](https://www.amazon.fr/Filament-ERYONE-1-75mm-Imprimante-Finition/dp/B08JFZGFG1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=filament%2Bblanc%2Bmat&qid=1613696978&sr=8-10&linkCode=sl1&tag=4527896-21&linkId=7238f7c85882c8d51b29e265e0555721&language=fr_FR&ref_=as_li_ss_tl&th=1)
- [Ice](https://www.amazon.fr/ICE-FILAMENTS-ICEFIL1PLA119-Filament-Wintershine/dp/B017HAIMZU?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=filament+blanc&qid=1613697286&sr=8-11&linkCode=sl1&tag=4527896-21&linkId=1aef2aceeea1d082c100213f150970af&language=fr_FR&ref_=as_li_ss_tl)

### Verbatim 
- [Silver (1kg)](https://www.amazon.fr/VERBATIM-FILLAMENT-3D-PRINT-55275/dp/B00WRBI67O/ref=sr_1_10?ie=UTF8&qid=1509281707&sr=8-10&keywords=PLA+verbatim) - very thin/precise print - 205°
- [White (1kg)](https://www.amazon.fr/Verbatim-Printer-Filament-PLA-blanc/dp/B00WRBI59S/ref=sr_1_1?ie=UTF8&qid=1509281347&sr=8-1&keywords=verbatim+pla) - easy to print - thick - 205°

### Amazon
- [violet (1kg)](https://www.amazon.fr/gp/product/B07D68S7C3/ref=ppx_yo_dt_b_asin_image_o05_s01?ie=UTF8&psc=1) - print at 220°, otherwise result is brittle, with loose adherence


### dagoma chromatic / delivery service bad
- [red (rouge pompier) (250g)](https://www.amazon.fr/gp/product/B074PDDPJ7/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)
- [black (noir brillant) (250g](https://www.amazon.fr/gp/product/B074PD8GYY/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)

## PETG
- [ERYONE trans blue](https://www.amazon.fr/gp/product/B07YJDB2C2/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1)
	- head=250/bed=80..85/fan=40%/ini layer=0.1 speed 30mm/s * 80%
    - [How to create transparent 3D prints!](https://www.youtube.com/watch?v=QkfQri2B0PY)

## [TPU?](https://www.youtube.com/watch?v=rPgr2VkYESw)

### Dev mode
- [Fiddle for this page](https://jsfiddle.net/y_duf/oqh3p8tx/) mostly written by [ChatGPT](https://chat.openai.com/c/fccdf27c-22b3-4c39-a392-a9c2350fe7cd)
