const qr = document.getElementById('qr');
const sizes = document.getElementById('sizes');
const generaterbtn = document.getElementById('generateBtn');
const downloadbtn = document.getElementById('downloadBtn');
const  main = document.querySelector('.main');

let size=sizes.value;
generaterbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
    
});

downloadbtn.addEventListener('click',()=>{
    let img = document.querySelector('.main img');

    if(img!==null)
    {
      let imgatr=img.getAttribute('src');
      downloadbtn.setAttribute("href",imgatr);
    }
    else {
        downloadbtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
   
});


function isEmptyInput(){
    qr.value.length>0 ? generaterQrCode():alert("Enter the text then generate code ");
}

function generaterQrCode(){
    main.innerHTML="";
    new QRCode(main,{
        text:qr.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
