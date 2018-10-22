---
layout: docs
title: Callout
description: Componente per evidenziare parti di testo
group: componenti-aggiuntivi
toc: true
---

<style>
  /* Style override for Documentation purposes */
@import url('https://fonts.googleapis.com/css?family=Lora');
</style>

I Callout posso essere utilizzati per evidenziare alcune parti del testo che richiedono particolare attenzione. Possono contenere messaggi di errore, avvertimento suggerimenti etc.

Il font utilizzato è il Lora, scaricabile da Google font ed utilizzabile liberamente.

## Esempi

{% capture example %}
<div class="callout">
	<h4 class="callout-title">Titolo callout</h4>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Success

{% capture example %}
<div class="callout success">
	<h4 class="callout-title"><i class="it-ico it-check"></i>Usa</h4>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Warning

{% capture example %}
<div class="callout warning">
	<div class="callout-title"><i class="it-ico it-warning"></i>Attenzione</div>
	<p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Danger

{% capture example %}
<div class="callout danger">
	<div class="callout-title"><i class="it-ico it-no"></i>Non usare</div>
	<p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Important

{% capture example %}
<div class="callout important">
	<div class="callout-title"><i class="it-ico it-info"></i>Importante</div>
	<p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Callout Note

{% capture example %}
<div class="callout note">
	<div class="callout-title"><i class="it-ico it-file"></i>Note a riguardo</div>
	<p>Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
</div>
{% endcapture %}{% include example.html content=example %}

## Callout Highlights

{% capture example %}
<div class="callout callout-highlight">
	<h4 class="callout-title">Titolo callout</h4>
	<p>Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Success

{% capture example %}
<div class="callout callout-highlight success">
	<h4 class="callout-title"><i class="it-ico it-check"></i>Usa</h4>
	<p>Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Warning

{% capture example %}
<div class="callout callout-highlight warning">
	<div class="callout-title"><i class="it-ico it-warning"></i>Attenzione</div>
	<p>Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Danger

{% capture example %}
<div class="callout callout-highlight danger">
	<div class="callout-title"><i class="it-ico it-no"></i>Non usare</div>
	<p>Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Important

{% capture example %}
<div class="callout callout-highlight important">
	<div class="callout-title"><i class="it-ico it-info"></i>Importante</div>
	<p>Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

### Highlight Note

{% capture example %}
<div class="callout callout-highlight note">
	<div class="callout-title"><i class="it-ico it-file"></i>Note</div>
	<p>Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.</p>
	<p>Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
</div>
{% endcapture %}{% include example.html content=example %}

## Highlight Approfondimento

{% capture example %}
<div class="callout callout-more note">
	<div class="callout-title"><i class="it-ico it-zoom-in"></i><span>Approfondimento</span></div>
	<p>Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique.</p>
	<p>Aliquam erat volutpat. Integer ut ultricies dui, non aliquam magna. Phasellus condimentum accumsan nunc, feugiat sollicitudin sem consectetur a. Etiam in purus leo. Donec feugiat, velit vitae consequat viverra, sem diam aliquam turpis, eget maximus dolor leo quis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor. Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.</p>
	<div id="collapseDiv1" class="collapse-div" role="tablist">
		<div class="collapse-header" id="heading1">
			<button class="callout-more-toggle" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
			Leggi tutto <span></span>
			</button>
			<a href="#" class="callout-more-download"><i class="it-ico it-pdf"></i>Download</a>
		</div>
		<div id="collapse1" class="collapse" role="tabpanel" aria-labelledby="heading1">
			<div class="collapse-body">
				<p>Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices lorem. Pellentesque ac diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui purus. Mauris in imperdiet risus, sed blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam id purus. Duis tincidunt sodales nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada.</p>
				<p>Sed iaculis, orci ut congue accumsan, ligula purus gravida sapien, ac dictum tellus dolor vel urna. In condimentum odio nec libero interdum convallis. Aliquam vel placerat mauris. Nunc vel sagittis nulla, ut sollicitudin urna. Phasellus aliquet nisl vitae diam auctor eleifend. Donec eget consectetur mi. Aliquam porta ipsum eros, eu fringilla nisl sagittis et.</p>
			</div>
		</div>
	</div>
</div>
{% endcapture %}{% include example.html content=example %}