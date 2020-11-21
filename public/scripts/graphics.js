//build the main pixi object
const app = new PIXI.Application({
  autoResize: true,
  resolution: devicePixelRatio 
});
//add the canvas to the html
document.body.appendChild(app.view);
//add a resize listener
window.addEventListener('resize', resize);
// Resize function window
function resize() {
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
}
//resize before 1st render
resize();
