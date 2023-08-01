import {Injectable} from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MachineImagesService {
  //get urls from environment
  private baseUrl: string = environment.baseUrl;
  private imageUrl: string = environment.imageUrl;
  private appKey: string = environment.appKey;
  private toolInSpindleImageEntity: string = environment.toolInSpindleImageEntity;
  private programPreviewImageEntity: string = environment.programPreviewImageEntity;
  private liveCameraImageEntity: string = environment.liveCameraImageEntity;

  //create new subjects
  toolInSpindleImage = new Subject<string>();
  programPreviewImage = new Subject<string>();
  liveCameraImage = new Subject<string>();

  //get httpclient
  constructor(private http: HttpClient) {
  }

  //get toolinspindleimage, pass result to subject
  public getToolInSpindleImage() {
    const url = this.imageUrl + this.toolInSpindleImageEntity;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      //add data:image/png;base64, to result to make it base64 encoded image
      this.toolInSpindleImage.next('data:image/png;base64,' + result.content);
      //put toolimage decoded to property in thingworx for ar application
      const imageDecodedPropertyUrl = this.baseUrl + 'JA_SE.MakerMillingImages.Thing/Properties/toolInSpindleDecoded';
      const body = {"toolInSpindleDecoded": 'data:image/png;base64,' + result.content};
      this.http.put<any>(imageDecodedPropertyUrl, body, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      });
    });
  }

  //get programpreviewimage, pass result to subject
  public getProgramPreviewImage() {
    const url = this.imageUrl + this.programPreviewImageEntity;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      //add data:image/png;base64, to result to make it base64 encoded image
      this.programPreviewImage.next('data:image/png;base64,' + result.content);
    });
  }

  //get livecamerafeed, pass result to subject
  public getLiveCameraFeed() {
    const url = this.imageUrl + this.liveCameraImageEntity;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      //add data:image/png;base64, to result to make it base64 encoded image
      this.liveCameraImage.next('data:image/png;base64,' + result.content);
    });
  }
}
