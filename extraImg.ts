//% color="#11BB11" block="Extra Functions Images" weight=100 icon="\uf03e"
namespace extraImg {
    
    export enum Operator {
        //% block="a and b"
        and = 0,
        //% block="a or b"
        or = 1,
        //% block="not (a and b)"
        nand = 2,
        //% block="not (a or b)"
        nor = 3,
        //% block="a xor b"
        xor = 4,
        //% block="not (a xor b)"
        xnor = 5,
        //% block="not a"
        inv1 = 6,
        //% block="not b"
        inv2 = 7,
        //% block="a - b"
        min1 = 8,
        //% block="b - a"
        min2 = 9,
        
        

    }
    


    /**
     * Boolean operators for images
     * @param imgA eg:null
     * @param imgB eg:null
     */
    //% block="(a = $imgA, b = $imgB) $x" blockId=opImg
    export function opImg(imgA: Image, imgB: Image, x: Operator): Image {
        let output: Image = null
        output = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `);
        if ((imgA && imgB)||(x==6&&imgA)||(x==7&&imgB)){
            let a: boolean = false;
            let b: boolean = false;
            for (let imgx = 0; imgx < 5; imgx++) {
                for (let imgy = 0; imgy < 5; imgy++) {
                    a = imgA.pixel(imgy, imgx);
                    b = imgB.pixel(imgy, imgx);
                    if (x == 0) {
                        output.setPixel(imgy, imgx, a && b);
                    } else if (x == 1) {
                        output.setPixel(imgy, imgx, a || b);
                    } else if (x == 2) {
                        output.setPixel(imgy, imgx, !(a && b));
                    } else if (x == 3) {
                        output.setPixel(imgy, imgx, !(a || b));
                    } else if (x == 4) {
                        output.setPixel(imgy, imgx, a!=b);
                    } else if (x == 5) {
                        output.setPixel(imgy, imgx, a==b);
                    } else if (x == 6) {
                        output.setPixel(imgy, imgx, !a);
                    } else if (x == 7) {
                        output.setPixel(imgy, imgx, !b);
                    } else if (x == 8) {
                        output.setPixel(imgy, imgx, a&&(a!=b));
                    } else if (x == 9) {
                        output.setPixel(imgy, imgx, b&&(a!=b));
                    } else {
                        output.setPixel(imgy, imgx, false);
                    }
                }
            }
        }
        return output;
    }
    
    /**
     * Shows the given image
     * @param img eg:null
     */
    //% block="show image $img" blockId=showImage
    export function showImg(img: Image): void {
        if (img){
            img.showImage(0)
        }
    }
}