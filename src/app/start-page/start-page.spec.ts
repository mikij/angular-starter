import { Title } from '@angular/platform-browser';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator/jest';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { StartPage } from './start-page';

describe('StartPage', () => {
  let spectator: Spectator<StartPage>;
  const createComponent = createComponentFactory({
    component: StartPage,
    providers: [mockProvider(Title, { getTitle: () => 'Angular Starter' })],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render card title', () => {
    const card = spectator.query(ZardCardComponent);

    expect(card?.zTitle()).toContain('Hello, Angular Starter');
  });

  it('should render card description', () => {
    const card = spectator.query(ZardCardComponent);

    expect(card?.zDescription()).toContain(
      'Congratulations! Your app is running. 🎉'
    );
  });

  it('should switch to dark mode on button click', () => {
    const button = spectator.query('button') as HTMLButtonElement;

    button.click();

    expect(spectator.component.getCurrentTheme()).toBe('dark');
  });
});
