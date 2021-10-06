import Text from './index';
import { render } from '../../infra/test/testUtils';

describe('<Text />', () => {
    it('displays the component', () => {
        const { container } = render(<Text>Text</Text>);
        expect(container).toMatchSnapshot();
    });
});
