import ContentLoader from 'react-content-loader';

interface Props {
    key: number;
}

const CheckboxSkeleton = (props: Props) => (
    <ContentLoader
        speed={2}
        width={111}
        height={124}
        viewBox="0 0 111 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="4" y="50" rx="0" ry="0" width="22" height="24" />
        <rect x="32" y="50" rx="0" ry="0" width="103" height="16" />
    </ContentLoader>
);

export default CheckboxSkeleton;
