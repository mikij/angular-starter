import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { StartPage } from './start-page';

describe('StartPage', () => {
  let spectator: Spectator<StartPage>;
  const createComponent = createComponentFactory(StartPage);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render card title', () => {
    const card = spectator.query(ZardCardComponent);

    expect(card?.zTitle()).toContain('Hello, myapp');
  });

  it('should render card description', () => {
    const card = spectator.query(ZardCardComponent);

    expect(card?.zDescription()).toContain(
      'Congratulations! Your app is running. 🎉'
    );
  });

  it('should render card title upon button click', () => {
    const card = spectator.query(ZardCardComponent);
    const button = spectator.query('button') as HTMLButtonElement;

    button.click();
    spectator.detectChanges();

    expect(card?.zTitle()).toContain('Hello, Zard UI');
  });
});
