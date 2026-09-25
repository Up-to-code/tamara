import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-yelo-header.html';
import body from '@/components/exact/en-sa-stores-yelo-body.html';
import footer from '@/components/exact/en-sa-stores-yelo-footer.html';
import inline from '@/components/exact/en-sa-stores-yelo.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
