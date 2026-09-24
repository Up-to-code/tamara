import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-revibe-header.html';
import body from '@/components/exact/en-sa-blog-post-revibe-body.html';
import footer from '@/components/exact/en-sa-blog-post-revibe-footer.html';
import inline from '@/components/exact/en-sa-blog-post-revibe.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
