import {Component} from '@angular/core';
import {FancyImageUploaderOptions, UploadedFile} from 'ng2-fancy-image-uploader';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  options: FancyImageUploaderOptions = {
      thumbnailHeight: 200,
      thumbnailWidth: 200,
      uploadUrl: 'https://fancy-image-uploader-demo.azurewebsites.net/api/demo/upload',
      allowedImageTypes: ['image/png', 'image/jpeg'],
      maxImageSize: 3,
      defaultImagePath: 'http://localhost:8000/storage/images/gfzyc5otZYVttXbpMNkffUo3XIvf8edpVozMuuxy.jpeg'
  };

  response: string;

  onUpload(file: UploadedFile) {
    this.response = file.response;
  }
}
