import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TranslateDashboardService {

  constructor(private httpClient: HttpClient) { }

  getLanguageFile(filePath: string) {
    return this.httpClient.get(filePath);
  }
}
