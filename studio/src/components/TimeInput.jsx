import React, { useState } from 'react';
import { Card, Stack, Flex } from '@sanity/ui';

function TimeInput({ onChange }) {
    const [formData, setFormData] = useState({
        startTime: '',
        endTime: '',
        closed: false
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
        onChange({ ...formData, [name]: newValue });
    };

    return (
        <Card padding={3} border>
            <Stack space={3}>
                <Flex>
                    <label htmlFor="start-time">Start Time:</label>
                    <input
                        id="start-time"
                        name="startTime"
                        type="time"
                        value={formData.startTime}
                        onChange={handleInputChange}
                    />
                </Flex>
                <Flex>
                    <label htmlFor="end-time">End Time:</label>
                    <input
                        id="end-time"
                        name="endTime"
                        type="time"
                        value={formData.endTime}
                        onChange={handleInputChange}
                    />
                </Flex>
                <Flex>
                    <label htmlFor="closed">Closed:</label>
                    <input
                        id="closed"
                        name="closed"
                        type="checkbox"
                        checked={formData.closed}
                        onChange={handleInputChange}
                    />
                </Flex>
            </Stack>
        </Card>
    );
}

export default TimeInput;