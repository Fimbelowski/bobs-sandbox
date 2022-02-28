import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import CardDrawer from '../../components/CardDrawer.vue';

describe('CardDrawer', () => {
  it('is closed by default', () => {
    const wrapper = mount(CardDrawer);

    const toggleButton = wrapper.find('button');
    expect(toggleButton.text()).toBe('Open');

    const cardContainer = wrapper.find('[data-testid="card-container"]');
    expect(cardContainer.classes('h-0')).toBe(true);
  });

  it('should open when the toggle is clicked', async () => {
    const wrapper = mount(CardDrawer);

    const toggleButton = wrapper.find('button');
    await toggleButton.trigger('click');

    expect(toggleButton.text()).toBe('Close');

    const cardContainer = wrapper.find('[data-testid="card-container"]');
    expect(cardContainer.classes('h-0')).toBe(false);
  });
});
