# Simple QR Code generation


# installation
```bash
npm install m-qr-code
```

# Usage

### Basic Usage
```
qr_code({
    "frame_name": "no-frame",
    "qr_code_text": "https://www.qr-code-generator.com/",
    "image_format": "SVG",
    "qr_code_logo": "scan-me-square"
});
```

<img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/qrcodes/frames/Api_page_-_QR-Code-Generator_com-f-1.jpg" width="150" height="150">
<hr>

## Example
```
qr_code({
    "frame_name": "no-frame",
    "qr_code_text": "https://www.qr-code-generator.com/",
    "image_format": "SVG",
    "background_color": "#ffffff",
    "foreground_color": "#fa6e79",
    "marker_right_inner_color": "#2d7cda",
    "marker_right_outer_color": "#00bfff",
    "marker_left_template": "version13",
    "marker_right_template": "version13",
    "marker_bottom_template": "version13"
});
```

<img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/qrcodes/color/Api_page_-_QR-Code-Generator_com-c-1.png" width="150" height="150">

<hr>

```
qr_code({
    "frame_name": "bottom-frame",
    "qr_code_text": "https://www.qr-code-generator.com/",
    "image_format": "SVG",
    "frame_color": "#02bfff",
    "frame_icon_name": "mobile",
    "frame_text": "Scan me",
    "marker_left_template": "version13",
    "marker_right_template": "version13",
    "marker_bottom_template": "version13"
});
```

<img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/qrcodes/frames/Api_page_-_QR-Code-Generator_com-f-1.jpg" width="150" height="150">

<hr>
<br>
<h1 align="center"> Get started with our QR Code API</h1>
<br>
<br>

# Basic Parameters


<table>
  <thread>
  <th>Parameter Name</th>
  <th>Type</th>
  <th>Default</th>
  <th>Description</th>
  </thread>
  <tbody>
    <tr><th scope="row">qr_code_text</th><td>string</td><td>Required</td><td>What you like to encode e.g. https://www.yourdomain.com or Free Text</td></tr>
    <tr><th scope="row">image_format</th><td>string</td><td>SVG</td><td>The output file format for your QR Code. There are different formats available. Possible values: JPG, PNG, SVG, EPS</td></tr>
    <tr><th scope="row">image_width</th><td>number</td><td>500</td><td>Output size in Pixel only supported for PNG and JPG Format</td></tr>
  </tbody>
</table>

<br>
<br>

# Design Parameters

<table>
  <thread>
  <th>Parameter Name</th>
  <th>Type</th>
  <th>Default</th>
  <th>Description</th>
  </thread>
 <tr><th scope="row">foreground_color</th><td>string</td><td>#000000</td><td>Foreground color in format #RRGGBB.</td></tr><tr><th scope="row">background_color</th><td>string</td><td>#FFFFFF</td><td>Background color in format #RRGGBB.</td></tr><tr><th scope="row">marker_left_inner_color</th><td>string</td><td>#000000</td><td>Inner color of the top-left position marker.</td></tr><tr><th scope="row">marker_left_outer_color</th><td>string</td><td>#000000</td><td>Outer color of the top-left position marker.</td></tr><tr><th scope="row">marker_right_inner_color</th><td>string</td><td>#000000</td><td>Inner color of the top-right marker.</td></tr><tr><th scope="row">marker_right_outer_color</th><td>string</td><td>#000000</td><td>Outer color of the top-right marker.</td></tr><tr><th scope="row">marker_bottom_inner_color</th><td>string</td><td>#000000</td><td>Inner color of the bottom-left marker.</td></tr><tr><th scope="row">marker_bottom_outer_color</th><td>string</td><td>#000000</td><td>Outer color of the bottom-left marker.</td></tr><tr><th scope="row">marker_left_template,
marker_right_template,
marker_bottom_template</th><td>string</td><td>version1</td><td><div class="row"><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version1.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version1</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version2.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version2</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version3.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version3</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version4.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version4</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version5.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version5</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version6.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version6</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version7.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version7</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version8.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version8</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version9.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version9</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version10.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version10</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version11.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version11</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version12.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version12</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version13.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version13</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version15.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version15</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/eyes/version16.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">version16</span></div></div></td></tr><tr><th scope="row">qr_code_logo</th><td>string</td><td>no-logo</td><td><div class="api-page__table-column-row row"><div class="api-page__table-column col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/logos/no-logo.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">no-logo</span></div><div class="api-page__table-column col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/logos/scan-me-square.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">scan-me-square</span></div><div class="api-page__table-column col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/logos/scan-me.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">scan-me</span></div></div></td></tr>
</table>


<br>
<br>

# frame parameters


<table>
  <thread>
  <th>Parameter Name</th>
  <th>Type</th>
  <th>Default</th>
  <th>Description</th>
  </thread>
<tbody>
  <tr><th scope="row">frame_color</th><td>string</td><td>#000000</td><td>Frame color in format #RRGGBB, e.g. #0000aa.</td></tr><tr><th scope="row">frame_text</th><td>string</td><td></td><td>Any label to display it close to the icon</td></tr><tr><th scope="row">frame_icon_name</th><td>string</td><td></td><td><div class="api-page__table-column-row row"><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/app.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">app</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/business.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">business</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/coupon.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">coupon</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/event.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">event</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/facebook.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">facebook</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/feedback.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">feedback</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/gallery.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">gallery</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/mobile.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">mobile</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/mp3.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">mp3</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/pdf.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">pdf</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/rating.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">rating</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/social.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">social</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/url.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">url</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/vcard.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">vcard</span></div><div class="api-page__table-column col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-6 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/icons/video.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">video</span></div></div></td></tr><tr><th scope="row">frame_name</th><td>string</td><td>Required</td><td><div class="api-page__table-column-row row"><div class="api-page__table-column col-xl-6 col-lg-6 col-md-12 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements api-page__table-img-elements--big" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/no-frame.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">no-frame</span></div><div class="api-page__table-column col-xl-6 col-lg-6 col-md-12 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements api-page__table-img-elements--big" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/bottom-frame.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">bottom-frame</span></div><div class="api-page__table-column col-xl-6 col-lg-6 col-md-12 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements api-page__table-img-elements--big" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/bottom-tooltip.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">bottom-tooltip</span></div><div class="api-page__table-column col-xl-6 col-lg-6 col-md-12 d-flex align-items-center no-padding">
<img class="api-page__table-img-elements api-page__table-img-elements--big" alt="" style="display: block; visibility: visible;" data-lazy-loaded="true" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/api_page/elements/frames/top-header.svg"  width="30" height="30"">
<span class="api-page__table-img-desc">top-header</span></div></div></td></tr>
</tbody>

<table/>
