import { wrapperFactoryBuilder } from 'tests/unit/helpers';
import HdNotifications from '@/components/notifications/HdNotifications.vue';

const NOTIFICATIONS = [
  {
    text: 'Hello world',
  },
  {
    text: 'Welcome to',
    url: 'https://www.homeday.de',
    urlLabel: 'Homeday',
  },
];

const wrapperBuilder = wrapperFactoryBuilder(HdNotifications, {
  props: {
    notifications: NOTIFICATIONS,
  },
  scopedSlots: {
    default: `<p>
      {{props.notification.text}}
      <a v-if="props.notification.url" href="props.notification.url">{{props.notification.urlLabel}}</a>
    </p>`,
  },
  shallow: true,
});

describe('HdNotifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = wrapperBuilder();
  });

  it('renders the component corrently', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
