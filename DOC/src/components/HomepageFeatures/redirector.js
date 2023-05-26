import React, { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        document.querySelector('.navbar__brand').href = 'http://doc.korpay.com/docs/intro/';
    }, []);

    return (
        <div>
            {/* 페이지 컨텐츠 */}
        </div>
    );
}

export default HomePage;