import { writeFile } from 'fs';
import svg2img from 'svg2img';


export default async function code(data) {

    const res = await fetch("https://api.qr-code-generator.com/v1/create?access-token=cvdvULoXbzmEaBlrm7Ww7lnVrucI91JYhJf0ffzm7L9XRs7cB9jHlN1aFFbgxSIY", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const svgCode = await res.text();

    svg2img(svgCode, { format: 'png' }, (error, buffer) => {
        if (error) {
            console.error('Error generating image:', error);
            return;
        }


        // Save the buffer to a file
        writeFile('./qrcode.png', buffer, (err) => {
            if (err) {
                console.error('Error saving image to file:', err);
                return;
            }
            console.log(`Image saved`);
        });
    });


}
