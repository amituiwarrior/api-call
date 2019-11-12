import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'safeHtmlDecode'
})
export class SafeHtmlDecodePipe implements PipeTransform {
  constructor() { }
  transform(value) {
  
    // value = value.replace(/&#(\d+);/g, function(match, dec) {
    //   return String.fromCharCode(dec);
    // });

    value = value.replace("&lt;!-- SC_OFF --&gt;", " ");
    value = value.replace("&lt;!-- SC_ON --&gt;", " ");
    let hiddenPre=document.createElement("pre");
    hiddenPre.innerHTML = value.replace(/</g,"&lt;");
    console.log('value', value)
    return hiddenPre.textContent;
  }

}
