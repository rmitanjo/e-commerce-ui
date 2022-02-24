import '../../assets/styles/PageContainer.css';

export default function PageContainer({children}) {
    return (
        <div className="my-page-container">
            {children}
        </div>
    );
}