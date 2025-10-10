import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';

import { ZardAccordionComponent } from './accordion.component';

import type { ClassValue } from 'clsx';

@Component({
  selector: 'z-accordion-item',
  exportAs: 'zAccordionItem',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="border-border flex flex-1 cursor-pointer flex-col border-b"
      [attr.data-state]="isOpen() ? 'open' : 'closed'">
      <button
        type="button"
        role="button"
        [id]="'accordion-' + zValue()"
        class="group focus-visible:ring-ring flex w-full flex-1 items-center justify-between px-0.5 py-4 text-sm font-medium focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none"
        [class]="class()"
        (click)="toggle()"
        (keydown.enter)="toggle()"
        (keydown.space)="toggle()"
        [attr.aria-expanded]="isOpen()"
        [attr.aria-controls]="'content-' + zValue()"
        tabindex="0">
        <span class="group-hover:underline">
          {{ zTitle() }}
        </span>
        <div
          class="icon-chevron-down text-lg transition-transform duration-200"
          [class]="isOpen() ? 'rotate-180' : ''"></div>
      </button>

      <div
        class="grid text-sm transition-all"
        [class]="isOpen() ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        [id]="'content-' + zValue()"
        [attr.data-state]="isOpen() ? 'open' : 'closed'"
        role="region"
        [attr.aria-labelledby]="'accordion-' + zValue()">
        <div class="overflow-hidden">
          <main class="pt-1 pb-4">
            <ng-content></ng-content>
          </main>
        </div>
      </div>
    </div>
  `,
})
export class ZardAccordionItemComponent {
  private cdr = inject(ChangeDetectorRef);

  readonly zTitle = input<string>('');
  readonly zValue = input<string>('');
  readonly class = input<ClassValue>('');

  private isOpenSignal = signal(false);

  accordion?: ZardAccordionComponent;

  isOpen = computed(() => this.isOpenSignal());

  setOpen(open: boolean): void {
    this.isOpenSignal.set(open);
    this.cdr.markForCheck();
  }

  toggle(): void {
    if (this.accordion) {
      this.accordion.toggleItem(this);
    } else {
      this.setOpen(!this.isOpen());
    }
  }
}
