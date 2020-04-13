import styled from '@emotion/styled';
import tw from 'tailwind.macro';

let EventContainer = styled.div`${tw`border-black border-2`}`;

let EventNameInput = styled('input') `${tw`border border-4`}`;

let EventLocationInput = styled('input') `${tw`border border-4`}`;

let EditEventButton = styled.button`${tw`border border-2`}`;

let DeleteEventButton = styled.button`${tw`border border-2`}`;

let UpdateEventButton = styled.button`${tw`border-blue border-2`}`;


export { EventContainer, EventNameInput, EventLocationInput, EditEventButton, DeleteEventButton, UpdateEventButton };
