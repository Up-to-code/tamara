import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mansorah-header.html';
import body from '@/components/exact/en-sa-stores-mansorah-body.html';
import footer from '@/components/exact/en-sa-stores-mansorah-footer.html';
import inline from '@/components/exact/en-sa-stores-mansorah.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
