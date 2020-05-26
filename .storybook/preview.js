import { configure } from '@storybook/react'

configure(
    [
        // require.context('../src/common/components', false, /\.stories\.js$/),
        require.context('../src/common', true, /\.stories\.js$/),
        require.context('../src/components', true, /\.stories\.js$/),
        require.context('../src/Authentication/components', true, /\.stories\.js$/),
    ], 
    module
)