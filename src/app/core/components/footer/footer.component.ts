import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  // Revisar por no quiero que se pinte una foto en mis home que se busca por el header, pero esta bien ya que es un ejemplo de output
  public messageControl = new FormControl('');

  constructor(private messageService: MessageService) {}

  public ngOnInit(): void {
      this.messageControl.valueChanges.subscribe((value) => {
        if (!value) { return; }
        // this.messageService.setMessage(value);
      });
  }

  // describe('FooterComponent', () => {
  //   let component: FooterComponent;
  //   let fixture: ComponentFixture<FooterComponent>;
  
  //   beforeEach(async () => {
  //     await TestBed.configureTestingModule({
  //       declarations: [ FooterComponent ]
  //     })
  //     .compileComponents();
  
  //     fixture = TestBed.createComponent(FooterComponent);
  //     component = fixture.componentInstance;
  //     fixture.detectChanges();
  //   });
  
  //   it('should create', () => {
  //     expect(component).toBeTruthy();
  //   });
}
