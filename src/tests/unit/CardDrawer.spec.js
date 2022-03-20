import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest';
import { shallowMount } from '@vue/test-utils';

import CardDrawer from '../../components/CardDrawer.vue';

describe('CardDrawer', () => {
  let wrapper = shallowMount(CardDrawer);

  beforeEach(() => {
    wrapper = shallowMount(CardDrawer);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('is closed by default', () => {
    const toggleButton = wrapper.find('[data-testid="toggle-button"]');
    expect(toggleButton.text()).toBe('Open');
    const cardContainer = wrapper.find('[data-testid="card-container"]');
    expect(cardContainer.classes('h-0')).toBe(true);
  });

  it('should open when the toggle is clicked', async () => {
    const toggleButton = wrapper.find('[data-testid="toggle-button"]');

    await toggleButton.trigger('click');

    expect(toggleButton.text()).toBe('Close');
    const cardContainer = wrapper.find('[data-testid="card-container"]');
    expect(cardContainer.classes('h-0')).toBe(false);
  });
});
