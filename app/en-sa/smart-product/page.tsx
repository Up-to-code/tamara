import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-smart-product-header.html';
import body from '@/components/exact/en-sa-smart-product-body.html';
import footer from '@/components/exact/en-sa-smart-product-footer.html';
import inline from '@/components/exact/en-sa-smart-product.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
