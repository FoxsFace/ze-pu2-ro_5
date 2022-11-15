L.Control.Layers.prototype._addItem=function(e){var t,a=document.createElement("label"),o=this._map.hasLayer(e.layer);e.overlay?((t=document.createElement("input")).type="checkbox",t.className="leaflet-control-layers-selector",t.defaultChecked=o):t=this._createRadioElement("leaflet-base-layers",o),t.layerId=L.stamp(e.layer),L.DomEvent.on(t,"click",this._onInputClick,this);var r=document.createElement("span");return r.innerHTML=" "+e.name,a.appendChild(t),a.appendChild(r),a.className=e.overlay?"checkbox":"radio",(e.overlay?this._overlaysList:this._baseLayersList).appendChild(a),a};var m=L.map("map",{zoomControl:!1});location.hash||m.setView([32.69,10.55],3),m.addHash();var url="http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",optionsObject={attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'},mq=L.tileLayer(url,optionsObject),watercolor=L.tileLayer("http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});mq.addTo(m);var lc=L.control.layers({"Stamen Watercolor":watercolor,"Stamen Toner":mq}).addTo(m),options={onEachFeature:function(e,t){e.properties&&t.bindPopup(Object.keys(e.properties).map((function(t){if("__color__"!==t)return t+": "+e.properties[t]})).join("<br />"),{maxHeight:200})},style:function(e){return{opacity:1,fillOpacity:.7,radius:6,color:e.properties.__color__}},pointToLayer:function(e,t){return L.circleMarker(t,{opacity:1,fillOpacity:.7,color:e.properties.__color__})}};