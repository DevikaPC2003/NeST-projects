import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Post } from './post';

describe('Post', () => {
  let component: Post;
  let fixture: ComponentFixture<Post>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post],
      providers: [provideHttpClient()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Post);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
