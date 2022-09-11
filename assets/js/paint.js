function configureListeners() {
    let images = document.getElementsByTagName("img")// select img elements  
     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
        console.log(images[i])
        images[i].addEventListener('mouseover', e => addOpacity(e))
        images[i].addEventListener('mouseleave', e => removeOpacity(e))
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add('dim')
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
    event.target.classList.remove('dim')
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    let paintPrices = [14.99, 11.14, 22.99, 13.42, 21.98, 4.99, 8.22, 11.99, 14.99]
    let paintCols = ["Lime Green", "Medium Brown", "Royal Blue", "Solid Red", "Solid White", "Solid Black", "Solid Cyan", "Solid Purple", "Solid Yellow"]
    //hell nah am i copying values for the hundreth time like this
    let num = Number(paintColor[2]) - 1
    // set variables for price and color name and invoke a function to update the price     
    price = paintPrices[num]
    colorName = paintCols[num]
    updatePrice(colorName, price)
    function updatePrice(colorName, price)
    {       
        let element = document.getElementById('color-price');
        element.textContent = "$" + price.toString();
        
    let color = document.getElementById('color-name');
        color.textContent = colorName; 
    }
    
}
