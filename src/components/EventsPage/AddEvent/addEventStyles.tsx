import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let AddEventContainer = styled.form`${tw`border-black border-2`}`;

let EventNameInput = styled('input') `${tw`border border-4`}`;

let EventLocationInput = styled('input') `${tw`border border-4`}`;

let AddEventButton = styled.button`${tw`border border-2 rounded px-2 py-2`}`;

export { AddEventContainer, EventNameInput, EventLocationInput, AddEventButton };
