import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    
    let id;
    this.route.params.subscribe(
      (params:Params)=>{
        id=params['id'];
      }
        );
  // console.log(id);
    this.server = this.serversService.getServer(id);
    //console.log(this.server);
  }

  
}
