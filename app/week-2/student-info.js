import React from 'react';
import Link from 'next/link';

function StudentInfo() {
    return (
        <div>
            <p>Hayden Dittmann</p>
            <Link href="https://github.com/hDittmann/cprg306-assignments" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
        </div>
    );
}

export default StudentInfo;