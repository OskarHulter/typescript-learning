import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function HellDo({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('Please be more enthusiastic');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default HellDo;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('Please cheer up.');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {(name = getExclamationMarks(enthusiasmLevel))}
                </div>
            </div>
        );
    }
}
/* Alternative Implementation

*/
