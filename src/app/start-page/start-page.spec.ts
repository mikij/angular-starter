import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
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

  it('should render title', () => {
    expect(spectator.query('h1')?.textContent).toContain('Hello, myapp');
  });
});
