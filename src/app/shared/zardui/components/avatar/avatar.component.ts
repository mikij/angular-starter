import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { mergeClasses, transform } from '@shared/zardui/utils/merge-classes';
import {
  avatarVariants,
  imageVariants,
  ZardAvatarImage,
  ZardAvatarVariants,
} from './avatar.variants';

@Component({
  selector: 'z-avatar',
  exportAs: 'zAvatar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    @if (zLoading()) {
      <span class="icon-loader-circle animate-spin {{ zLoading() }}"></span>
    } @else {
      @if (zImage()?.fallback) {
        <span class="absolute z-0 m-auto text-base">{{
          zImage()?.fallback
        }}</span>
      }
      @if (zImage()?.url) {
        <img
          [src]="zImage()?.url"
          [alt]="zImage()?.alt || 'Avatar'"
          [class]="imgClasses()" />
      }
    }
    @if (zStatus()) {
      @switch (zStatus()) {
        @case ('online') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute -right-[5px] -bottom-[5px] z-20 h-5 w-5 text-green-500">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        }
        @case ('offline') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute -right-[5px] -bottom-[5px] z-20 h-5 w-5 text-red-500">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        }
        @case ('doNotDisturb') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute -right-[5px] -bottom-[5px] z-20 h-5 w-5 text-red-500">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" fill="currentColor" />
          </svg>
        }
        @case ('away') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute -right-[5px] -bottom-[5px] z-20 h-5 w-5 rotate-y-180 text-yellow-400">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" />
          </svg>
        }
        @case ('invisible') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--muted-foreground)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute -right-[5px] -bottom-[5px] z-20 h-5 w-5 text-stone-400/90">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        }
      }
    }
  `,
  host: {
    '[class]': 'containerClasses()',
  },
})
export class ZardAvatarComponent {
  readonly zType = input<ZardAvatarVariants['zType']>('default');
  readonly zSize = input<ZardAvatarVariants['zSize'] | null>('default');
  readonly zShape = input<ZardAvatarVariants['zShape'] | null>('default');
  readonly zStatus = input<ZardAvatarVariants['zStatus'] | null>(null);
  readonly zBorder = input(false, { transform });
  readonly zLoading = input(false, { transform });
  readonly zImage = input<ZardAvatarImage['zImage'] | null>({ fallback: 'ZA' });

  readonly class = input<string>('');

  protected readonly containerClasses = computed(() =>
    mergeClasses(
      avatarVariants({
        zType: this.zType(),
        zSize: this.zSize(),
        zShape: this.zShape(),
        zBorder: this.zBorder(),
      }),
      this.class()
    )
  );
  protected readonly imgClasses = computed(() =>
    mergeClasses(imageVariants({ zShape: this.zShape() }))
  );
}
