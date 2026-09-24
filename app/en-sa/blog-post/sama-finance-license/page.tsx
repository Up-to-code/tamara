import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-sama-finance-license-header.html';
import body from '@/components/exact/en-sa-blog-post-sama-finance-license-body.html';
import footer from '@/components/exact/en-sa-blog-post-sama-finance-license-footer.html';
import inline from '@/components/exact/en-sa-blog-post-sama-finance-license.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
