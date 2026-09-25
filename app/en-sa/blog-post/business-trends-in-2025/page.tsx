import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-business-trends-in-2025-header.html';
import body from '@/components/exact/en-sa-blog-post-business-trends-in-2025-body.html';
import footer from '@/components/exact/en-sa-blog-post-business-trends-in-2025-footer.html';
import inline from '@/components/exact/en-sa-blog-post-business-trends-in-2025.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
