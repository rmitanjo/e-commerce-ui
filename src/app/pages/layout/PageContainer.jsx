import '../../assets/styles/PageContainer.css';

function PageContainer({children}) {
    return (
        <div className="my-page-container">
            {children}
        </div>
    );
};

export default PageContainer;