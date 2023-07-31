import {Injectable} from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MachineImagesService {

  private baseUrl: string = environment.baseUrl;
  private imageUrl: string = environment.imageUrl;
  private appKey: string = environment.appKey;
  private toolInSpindleImageEntity: string = environment.toolInSpindleImageEntity;
  private programPreviewImageEntity: string = environment.programPreviewImageEntity;
  private liveCameraImageEntity: string = environment.liveCameraImageEntity;

  toolInSpindleImage = new Subject<string>();
  programPreviewImage = new Subject<string>();
  liveCameraImage = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  public getToolInSpindleImage() {
    const url = this.imageUrl + this.toolInSpindleImageEntity;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.toolInSpindleImage.next('data:image/png;base64,' + result.content);
      const imageDecodedPropertyUrl = this.baseUrl + 'JA_SE.MakerMillingImages.Thing/Properties/toolInSpindleDecoded';
      const body = {"toolInSpindleDecoded": 'data:image/png;base64,' + result.content};
      this.http.put<any>(imageDecodedPropertyUrl, body, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log("uploaded");
      });
    });
  }

  public getProgramPreviewImage() {
    const url = this.imageUrl + this.programPreviewImageEntity;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.programPreviewImage.next('data:image/png;base64,' + result.content);
    });
  }

  public getLiveCameraFeed() {
    const url = this.imageUrl + this.liveCameraImageEntity;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.liveCameraImage.next('data:image/png;base64,' + result.content);
    });
  }
}
