import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-jewellery-header.html';
import body from '@/components/exact/en-sa-industry-jewellery-body.html';
import footer from '@/components/exact/en-sa-industry-jewellery-footer.html';
import inline from '@/components/exact/en-sa-industry-jewellery.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
