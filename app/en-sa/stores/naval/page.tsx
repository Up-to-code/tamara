import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-naval-header.html';
import body from '@/components/exact/en-sa-stores-naval-body.html';
import footer from '@/components/exact/en-sa-stores-naval-footer.html';
import inline from '@/components/exact/en-sa-stores-naval.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
