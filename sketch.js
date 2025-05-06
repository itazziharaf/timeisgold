    const density = "Ñ@#W$t!m3i$g0Ld?!abc;:+=-,._          ";



     //const density = '       .:-i|=+%O#@'
     //const density = '        .:░▒▓█';
     
     let video;
     let asciiDiv;
     
             function setup() {
               asciiDiv = createDiv();
               noCanvas();
               video = createCapture(VIDEO);
               video.size(200, 100);
               video.hide();

          asciiDiv.style('font-family', 'monospace');
          asciiDiv.style('font-size', '6px');
          asciiDiv.style('line-height', '6px');
          asciiDiv.style('text-align', 'center');
          asciiDiv.style('display', 'flex');
          asciiDiv.style('justify-content', 'center');
          asciiDiv.style('align-items', 'center');
          asciiDiv.style('height', '100vh');
          asciiDiv.style('width', '100vw');
          asciiDiv.style('position', 'absolute');
          asciiDiv.style('top', '0');
          asciiDiv.style('left', '0');
             }
     
             function draw() {
               video.loadPixels();
               let asciiImage = "";
               for (let j = 0; j < video.height; j++) {
                 for (let i = 0; i < video.width; i++) {
                   const pixelIndex = (i + j * video.width) * 4;
                   const r = video.pixels[pixelIndex + 0];
                   const g = video.pixels[pixelIndex + 1];
                   const b = video.pixels[pixelIndex + 2];
                   const avg = (r + g + b) / 3;
                   const len = density.length;
                   const charIndex = floor(map(avg, 0, 255, 0, len));
                   const c = density.charAt(charIndex);
                   if (c == " ") asciiImage += "&nbsp;";
                   else asciiImage += c;
                 }
                 asciiImage += '<br/>';
               }
               asciiDiv.html(asciiImage);
             }