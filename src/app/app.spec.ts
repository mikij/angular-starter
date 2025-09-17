import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { App } from './app';

describe('App', () => {
  let spectator: Spectator<App>;
  const createComponent = createComponentFactory(App);

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
