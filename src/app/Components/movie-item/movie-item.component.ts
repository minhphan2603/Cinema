import {
  Component,
  OnInit,
  Input,
  HostListener,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;

  @ViewChild("hover", { static: true }) hover: ElementRef;

  @HostListener("mouseenter")
  onHover() {
    this.hover.nativeElement.style.display = "block";
  }

  @HostListener("mouseleave")
  offHover() {
    this.hover.nativeElement.style.display = "none";
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(path) {
    this.router.navigate([path]);
  }
}
