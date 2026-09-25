import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mihyar-header.html';
import body from '@/components/exact/en-sa-stores-mihyar-body.html';
import footer from '@/components/exact/en-sa-stores-mihyar-footer.html';
import inline from '@/components/exact/en-sa-stores-mihyar.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
