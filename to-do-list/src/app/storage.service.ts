import {Injectable} from '@angular/core';
import {Task} from "./task";
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageInitialised = false;

  constructor(private storage: Storage) {}


  async getTasks(): Promise<Task[]> {
    if (!this.storageInitialised) await this.storage.create();

    return (await this.storage.get('tasks')) || [];
  }

  async saveTasks(tasks: Task[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('tasks', tasks);
  }

}
