import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-nars-header.html';
import body from '@/components/exact/en-sa-stores-nars-body.html';
import footer from '@/components/exact/en-sa-stores-nars-footer.html';
import inline from '@/components/exact/en-sa-stores-nars.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
