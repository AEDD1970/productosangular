import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultPost = [];
//    if(arg.length <=3) return value;
    for (const post of value) {
      if (post.producname.indexOf(arg) > -1) {
        resultPost.push(post)

      };
    };
    return resultPost;
  }

}
