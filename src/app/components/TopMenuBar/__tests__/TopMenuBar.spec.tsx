import React from 'react';
import { render } from '@testing-library/react';
import { TopMenuBar } from '../TopMenuBar';

describe('TopMenuBar', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<TopMenuBar />);
        expect(asFragment()).toMatchSnapshot();
    });
});