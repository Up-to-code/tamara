import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-category-press-header.html';
import body from '@/components/exact/en-sa-blog-category-press-body.html';
import footer from '@/components/exact/en-sa-blog-category-press-footer.html';
import inline from '@/components/exact/en-sa-blog-category-press.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
